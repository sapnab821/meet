// src/api.js

import mockData from './mock-data';


/**
 *
  
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
 
/*
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

const checkToken = async (accessToken) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  );
  const result = await response.json();
  return result;
};

const removeQuery = () => {
  let newurl;
  if (window.history.pushState && window.location.pathname) {
    newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};



export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');

  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      const response = await fetch(
        "https://owtv818248.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url"
      );
      const result = await response.json();
      const { authUrl } = result;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};
/**
 *
 * This function will fetch the list of all events
 
*/

/*
export const getEvents = async () => {
  if (window.location.href.startsWith('http://localhost')) {
    return mockData;
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url =  "https://owtv818248.execute-api.us-east-2.amazonaws.com/dev/api/get-events/${token}";
    const response = await fetch(url);
    const result = await response.json();
    if (result) {
      return result.events;
    } else return null; 
  };
}


const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const response = await fetch(
    "https://owtv818248.execute-api.us-east-2.amazonaws.com/dev/api/token/" + encodeCode
  );
  const { access_token } = await response.json();
  access_token && localStorage.setItem("access_token", access_token);

  return access_token;
};


const getToken = async (code) => {
  try {
    const encodeCode = encodeURIComponent(code);
 
    const response = await fetch( 'https://owtv818248.execute-api.us-east-2.amazonaws.com/dev/api/token' + '/' + encodeCode);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const { access_token } = await response.json();
    access_token && localStorage.setItem("access_token", access_token);
    return access_token;
  } catch (error) {
    error.json();
  }
 }
*/

export const extractLocations = async(eventsPromise) => {
  const events = eventsPromise;
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');

  const tokenCheck = accessToken && (await checkToken(accessToken))

  if(!accessToken || tokenCheck.error) {
      await localStorage.removeItem('access_token');
      const searchParams = new URLSearchParams(window.location.search);
      const code = await searchParams.get('code');
      const getAuthURL = 'https://owtv818248.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url';
      if (!code) {
          const response = await fetch(getAuthURL);
          const result = await response.json();
          const { authUrl } = result;
          return (window.location.href = authUrl);
      }
      return code && getToken(code);
  }
  return accessToken;
};

const checkToken = async (accessToken) => {
  try{
      const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
      );
      const result = await response.json();
      return result;
  } catch (error) {
      console.error('Error checking token', error);
      return { error: 'Failed to check token'};
  }

};

const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const response = await fetch(`https://owtv818248.execute-api.us-east-2.amazonaws.com/dev/api/token/${encodeCode}`);
  const { access_token } = await response.json();
  access_token && localStorage.setItem('access_token', access_token);

  return access_token;
};

export const getTestEvents = async () => {
  return mockData;
}

/*
*   FETCH:      data
*   FROM:       testEventData.js
*/
export const getEvents = async () => {
  
  if(window.location.href.startsWith('http://localhost')) {
      return testEventData;
  }

  if(!navigator.onLine) {
      const events = localStorage.getItem('offlineEvents');
      return events?JSON.parse(events):[]
  }
  
  const token = await getAccessToken();

  if(token) {
      removeQuery();
      const response = await fetch(`https://owtv818248.execute-api.us-east-2.amazonaws.com/dev/api/get-events/${token}`);
      if(!response.ok) {
          console.error('Error while fetching events:', response.statusText);
          return null;
      }        
      const result = await response.json();
      if(result) {
          localStorage.setItem("offlineEvents", JSON.stringify(result.events));
          return result.events;
      }else{
          return null;
      }
  }
};

const removeQuery = () => {
  let newURL;
  if(window.history.pushState && window.location.pathname) {
      newURL = 
          window.location.protocol + 
          '//' + 
          window.location.host +
          window.location.pathname;
      window.history.pushState('', '', newURL);
  }else{
      newURL = 
          window.location.protocol +
          '//' +
          window.location.host;
      window.history.pushState('', '', newURL);
  }
};