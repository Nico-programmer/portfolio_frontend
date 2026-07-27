import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

const SEO = ({
  title,
  description,
  image = "/preview.png",
}: SEOProps) => {
  const url = window.location.href;

  return (
    <Helmet>

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="author"
        content="Nicolás Paulo"
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

    </Helmet>
  );
};

export default SEO;