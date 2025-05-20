import { useState, useCallback, useRef, useEffect } from "react";

const useForm = (initialValues = {}, validationRules = {}, options = {}) => {
	const { validateOnChange = true, validateOnBlur = true, debounceTime = 300 } = options;

	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const debounceTimers = useRef({});

	const validateField = useCallback(
		(name, value) => {
			const rules = validationRules[name];
			if (!rules) return "";

			for (const rule of rules) {
				if (rule.required && !value) {
					return rule.message || "This field is required";
				}
				if (rule.pattern && !rule.pattern.test(value)) {
					return rule.message || "Invalid format";
				}
				if (rule.minLength && value.length < rule.minLength) {
					return rule.message || `Minimum length is ${rule.minLength}`;
				}
				if (rule.maxLength && value.length > rule.maxLength) {
					return rule.message || `Maximum length is ${rule.maxLength}`;
				}
				if (rule.custom && !rule.custom(value)) {
					return rule.message || "Invalid value";
				}
			}
			return "";
		},
		[validationRules]
	);

	const debouncedValidate = useCallback(
		(name, value) => {
			if (debounceTimers.current[name]) {
				clearTimeout(debounceTimers.current[name]);
			}

			debounceTimers.current[name] = setTimeout(() => {
				setErrors((prev) => ({
					...prev,
					[name]: validateField(name, value),
				}));
			}, debounceTime);
		},
		[validateField, debounceTime]
	);

	const handleChange = useCallback(
		(e) => {
			const { name, value } = e.target;
			setValues((prev) => ({ ...prev, [name]: value }));

			if (validateOnChange) {
				debouncedValidate(name, value);
			}
		},
		[validateOnChange, debouncedValidate]
	);

	const handleBlur = useCallback(
		(e) => {
			const { name } = e.target;
			setTouched((prev) => ({ ...prev, [name]: true }));

			if (validateOnBlur) {
				setErrors((prev) => ({
					...prev,
					[name]: validateField(name, values[name]),
				}));
			}
		},
		[validateOnBlur, validateField, values]
	);

	const validateForm = useCallback(() => {
		const newErrors = {};
		Object.keys(validationRules).forEach((name) => {
			newErrors[name] = validateField(name, values[name]);
		});
		setErrors(newErrors);
		return !Object.values(newErrors).some((error) => error);
	}, [validateField, values, validationRules]);

	const handleSubmit = useCallback(
		(onSubmit) => async (e) => {
			e.preventDefault();
			setIsSubmitting(true);

			try {
				const isValid = validateForm();
				if (isValid) {
					await onSubmit(values);
				}
			} finally {
				setIsSubmitting(false);
			}
		},
		[validateForm, values]
	);

	const resetForm = useCallback(() => {
		setValues(initialValues);
		setErrors({});
		setTouched({});
		setIsSubmitting(false);
	}, [initialValues]);

	const setFieldValue = useCallback(
		(name, value) => {
			setValues((prev) => ({ ...prev, [name]: value }));
			if (validateOnChange) {
				debouncedValidate(name, value);
			}
		},
		[validateOnChange, debouncedValidate]
	);

	const setFieldError = useCallback((name, error) => {
		setErrors((prev) => ({ ...prev, [name]: error }));
	}, []);

	// Cleanup debounce timers on unmount
	useEffect(() => {
		return () => {
			Object.values(debounceTimers.current).forEach((timer) => {
				clearTimeout(timer);
			});
		};
	}, []);

	return {
		values,
		errors,
		touched,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
		resetForm,
		setFieldValue,
		setFieldError,
		validateForm,
	};
};

export default useForm;
