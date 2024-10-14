"use client";
export default function Home() {
  const handleLocationCallBack = (params: any) => {
    console.log("Login With DashenSuper App Clicked");
    alert("Recived location status " + params);
    let requestPermission = JSON.stringify({
      functionName: "requestPermissions",
      params: {
        permissions: ["Location"],
        callbackName: { handleLocationCallBack },
      },
    });
    (window as any).dashenbanksuperapp?.send(requestPermission);
  };

  const handlePermissionCallBack = () => {
    console.log("Login With DashenSuper App Clicked");
    alert("Request Location Permission");
    let requestPermission = JSON.stringify({
      functionName: "requestPermissions",
      params: {
        permissions: ["Location"],
        callbackName: { handleLocationCallBack },
      },
    });
    (window as any).dashenbanksuperapp?.send(requestPermission);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-white text-xl font-bold" style={{ fontSize: 30 }}>
          {" "}
          Aseb Market
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
