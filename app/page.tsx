"use client";
import { useState } from "react";
export default function Home() {
  const [error, setError] = useState("");
  const [location, setLocation] = useState({ lat: 0.0, lon: 0.0 });
  const handleLocationCallBack = (params: any) => {
    console.log("Login With DashenSuper App Clicked");
    alert("Recived location status Injected " + params);
    // let requestPermission = JSON.stringify({
    //   functionName: "requestPermissions",
    //   params: {
    //     permissions: ["Location"],
    //     callbackName: { handleLocationCallBack },
    //   },
    // });
    // (window as any).dashenbanksuperapp?.send(requestPermission);
  };

  // Attach the callback handler to the window object
  (window as any).CallbackHandler = handleLocationCallBack;

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });

          setError("");
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              setError("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              setError("The request to get user location timed out.");
              break;
            default:
              setError("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const handlePermissionCallBack = () => {
    console.log("Login With DashenSuper App Clicked");
    alert("Request Location Permission");
    let requestPermission = JSON.stringify({
      functionName: "requestPermissions",
      params: {
        permissions: ["Location"],
        callbackName: "handleLocationCallBack",
      },
    });
    (window as any).dashenbanksuperapp?.send(requestPermission);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-white text-xl font-bold" style={{ fontSize: 30 }}>
          {" "}
          XYZ Market
        </h1>
        <h1 className="text-white text-xl font-bold" style={{ fontSize: 30 }}>
          {" "}
          Location Gained ==={" "}
          {location
            ? "Latitude " + location.lat + "Longtitude " + location.lon
            : ""}
        </h1>
        <button
          onClick={handlePermissionCallBack}
          style={{
            background: "orange",
            borderRadius: 30,
            paddingRight: 30,
            paddingLeft: 30,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          {" "}
          Login With Dashen SuperApp
        </button>
      </main>
    </div>
  );
}
