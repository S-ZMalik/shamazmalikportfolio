// const handleFormData = async (e, errorMessage, setErrorMessage, setLoading) => {
//   e.preventDefault();

//   const formData = new FormData(e.target);
//   const obj = Object.fromEntries(formData.entries());
//   console.log(obj);

//   for (let key in obj) {
//     if (!obj[key]) {
//       setErrorMessage("All Fields are required");
//     } else {
//       setErrorMessage(null);
//     }
//   }

//   if (!errorMessage) {
//     setLoading(true);
//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(obj),
//     });

//     const data = await res.json();

//     console.log(data);

//     if (data.success) {
//       e.target.reset();
//       setLoading(false);
//       alert("Message sent");
//     }
//   } else {
//     return;
//   }
// };

const handleFormData = async (
  e,
  setSuccessMessage,
  setErrorMessage,
  setLoading
) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const obj = Object.fromEntries(formData);

  const hasEmptyField = Object.values(obj).some((val) => !val);

  if (hasEmptyField) {
    setErrorMessage("All Fields are required");
    return;
  }

  setErrorMessage(null);
  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const data = await res.json();

    console.log(data);

    if (data.success) {
      e.target.reset();
      setSuccessMessage("Message sent successfully");

      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } else {
      setErrorMessage("Something went wrong");
    }
  } catch (error) {
    setErrorMessage(error);
  }

  setLoading(fasle);
};

export default handleFormData;
