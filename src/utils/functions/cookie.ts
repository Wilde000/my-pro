export const setCookie = (
  name: string,
  data: string,
  expires?: string | number
): void => {
  document.cookie = `${name}=${data}; expires=${
    expires ? new Date(expires).toUTCString() : ""
  }; path=/;`;
};

export const getCookie = (name: string): string | undefined => {
  const { cookie } = document;
  const value = `; ${cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts?.length === 2) {
    return parts.pop()?.split(";").shift();
  }
};

export const deleteCookie = (name: string): void => setCookie(name, "", -1);
