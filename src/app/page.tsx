import styles from "./page.module.css";

export default function Home() {
  // What you'd get back from our GraphQL Content Delivery API
  const exampleDatoGraphQlResponse = {
    data: {
      upload: {
        responsiveImage: {
          sizes: "(max-width: 500px) 100vw, 500px",
          srcSet:
            "https://www.datocms-assets.com/174347/1759255105-example-image.jpg?dpr=0.25&h=500&w=500 125w,https://www.datocms-assets.com/174347/1759255105-example-image.jpg?dpr=0.5&h=500&w=500 250w,https://www.datocms-assets.com/174347/1759255105-example-image.jpg?dpr=0.75&h=500&w=500 375w,https://www.datocms-assets.com/174347/1759255105-example-image.jpg?dpr=2&h=500&w=500 500w,https://www.datocms-assets.com/174347/1759255105-example-image.jpg?dpr=1.5&h=500&w=500 750w,https://www.datocms-assets.com/174347/1759255105-example-image.jpg?dpr=2&h=500&w=500 1000w",
          src: "https://www.datocms-assets.com/174347/1759255105-example-image.jpg?dpr=3&h=100&w=100",
          aspectRatio: 1,
          base64:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBg4ICAgVDw0LDhEPDQ0NDhkNDQ0SFxMZGBYTFhUmHysjGh0oKSEWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHA0NHS8cFhwzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAABAMFBgH/xAAeEAACAgEFAQAAAAAAAAAAAAAAAwECEQQFEhUxIf/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAGREAAgMBAAAAAAAAAAAAAAAAAAIBAyIS/9oADAMBAAIRAxEAPwDS2fNVfIFq662cYH9OurF4mCbrlRHLBHuSOinU2RaXclZmDgxqFUorEQAutY5DO2ivpu6l+DvcLsoABXzoXVGSFu5LusAAUkzyGeNH/9k=",
          height: 500,
          width: 500,
          title: null,
        },
      },
    },
  };

  // Destructure the actual image data that we need, `responsiveImage`
  const {
    data: {
      upload: { responsiveImage },
    },
  } = exampleDatoGraphQlResponse;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>DatoCMS Next.js and react-datocms image tests</h1>

        <h2>Inline JSX tags</h2>
        <p>
          Inspect this box to see the noscript inside with HTML-encoded URL
          chars. This breaks Imgix params.
        </p>
        <div style={{ width: 700, height: 700, backgroundColor: "orange" }}>
          <noscript>
            <h3>As an image SRC</h3>
            <img src={responsiveImage.src} alt="" />

            <h3>As string</h3>
            <p>{responsiveImage.src}</p>

            <h3>As a data attribute</h3>
            <div data-test={responsiveImage.src}>
              As data attribute (inspect this dev)
            </div>
          </noscript>
        </div>

        <h2>As template literal string</h2>
        <p>
          In this box, we stringify the HTML instead and put it inside
          dangerouslySetInnerHTML. This works.
        </p>
        <div
          style={{ width: 700, height: 700, backgroundColor: "darkgreen" }}
        >
          <noscript dangerouslySetInnerHTML={{__html: `
            <h3>As an image SRC</h3>
            <img src="${responsiveImage.src}" alt="" />

            <h3>As string</h3>
            <p>${responsiveImage.src}</p>

            <h3>As a data attribute</h3>
            <div data-test="${responsiveImage.src}">As data attribute (inspect this dev)</div>
          `}}/>
        </div>
      </main>
    </div>
  );
}
