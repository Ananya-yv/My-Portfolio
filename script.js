
  function copyEmail() {
    const email = "yvananya@gmail.com";
    navigator.clipboard.writeText(email).then(
      () => alert("Email address copied to clipboard!"),
      () => alert("Failed to copy email address.")
    );
  }
