import Script from "next/script";

type GoogleTagManagerProps = {
  gtmId: string;
};

export function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  return (
    <>
      <Script id="gtm-init" strategy="lazyOnload">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          title="Google Tag Manager"
          height="0"
          width="0"
          className="hidden"
        />
      </noscript>
    </>
  );
}
