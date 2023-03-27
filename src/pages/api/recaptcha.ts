export async function post({ request }) {
  const data = await request.json();

  const secret = import.meta.env.CAPTCHA_SECRET;

  const recaptchaURL = "https://www.google.com/recaptcha/api/siteverify";

  const response = await fetch(recaptchaURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    body: `secret=${secret}&response=${data}`,
  });

  const responseData = await response.json();

  return new Response(JSON.stringify({ responseData }), {
    status: 200,
  });
}
