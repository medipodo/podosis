import React from "react";
import { Helmet } from "react-helmet-async";
import { clinic } from "../mock";

const SITE_URL = "https://podosis.com";

const SEO = ({
  title,
  description,
  path = "/",
  image,
  type = "website",
  jsonLd,
}) => {
  const fullTitle =
    title && title !== clinic.name
      ? `${title} | ${clinic.name}`
      : `${clinic.name} — Elvankent Ayak Bakım Merkezi`;
  const desc =
    description ||
    "Elvankent'te profesyonel ayak bakım, batık tırnak ve tırnak mantarı tedavisi. Klinik düzeyde hijyen, kişisel yaklaşım.";
  const canonical = `${SITE_URL}${path}`;
  const ogImage =
    image ||
    "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/dkhwxa40_podosis.webp";

  return (
    <Helmet>
      <html lang="tr" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="tr_TR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
      {jsonLd &&
        (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((obj, i) => (
          <script type="application/ld+json" key={i}>
            {JSON.stringify(obj)}
          </script>
        ))}
    </Helmet>
  );
};

export default SEO;
