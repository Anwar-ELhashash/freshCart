/// function check the strength of password
/// take password to check it
/// and return different object depend on the strength

export function checkPasswordStrength(password) {
  let strength = 0;
  let feedBack = { text: "", background: "", width: "", textColor: "" };

  if (password.length > 8) strength++;
  if (password.length > 12) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*()?]/.test(password)) strength++;

  switch (strength) {
    case 1:
      feedBack.text = "very weak";
      feedBack.background = "bg-red-500";
      feedBack.textColor = "text-red-500";
      feedBack.width = "w-1/6";
      break;
    case 2:
      feedBack.text = "weak";
      feedBack.background = "bg-orange-500";
      feedBack.textColor = "text-orange-500";
      feedBack.width = "w-2/6";
      break;
    case 3:
      feedBack.text = "fair";
      feedBack.background = "bg-yellow-500";
      feedBack.textColor = "text-yellow-500";
      feedBack.width = "w-3/6";
      break;
    case 4:
      feedBack.text = "good";
      feedBack.background = "bg-lime-500";
      feedBack.textColor = "text-lime-500";
      feedBack.width = "w-4/6";
      break;
    case 5:
      feedBack.text = "strong";
      feedBack.background = "bg-primary-500";
      feedBack.textColor = "text-primary-500";
      feedBack.width = "w-5/6";
      break;
    case 6:
      feedBack.text = "very strong";
      feedBack.background = "bg-primary-600";
      feedBack.textColor = "text-primary-600";
      feedBack.width = "w-full";
      break;
  }

  return feedBack;
}
