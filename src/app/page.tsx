import NextImage from "next/image";
import {Image as DatoImage} from "react-datocms";
import styles from "./page.module.css";

export default function Home() {

  // What you'd get back from our GraphQL Content Delivery API
  const exampleDatoGraphQlResponse = {
    "data": {
      "upload": {
        "responsiveImage": {
          "sizes": "(max-width: 1024px) 100vw, 1024px",
          "srcSet": "https://www.datocms-assets.com/174347/1759255105-example-image.jpg?dpr=0.25 256w,https://www.datocms-assets.com/174347/1759255105-example-image.jpg?dpr=0.5 512w,https://www.datocms-assets.com/174347/1759255105-example-image.jpg?dpr=0.75 768w,https://www.datocms-assets.com/174347/1759255105-example-image.jpg 1024w",
          "src": "https://www.datocms-assets.com/174347/1759255105-example-image.jpg",
          "aspectRatio": 1,
          "base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBg4ICAgVDw0LDhEPDQ0NDhkNDQ0SFxMZGBYTFhUmHysjGh0oKSEWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHA0NHS8cFhwzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAABAMFBgH/xAAeEAACAgEFAQAAAAAAAAAAAAAAAwECEQQFEhUxIf/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAGREAAgMBAAAAAAAAAAAAAAAAAAIBAyIS/9oADAMBAAIRAxEAPwDS2fNVfIFq662cYH9OurF4mCbrlRHLBHuSOinU2RaXclZmDgxqFUorEQAutY5DO2ivpu6l+DvcLsoABXzoXVGSFu5LusAAUkzyGeNH/9k=",
          "height": 1024,
          "width": 1024,
          "title": null
        }
      }
    }
  }

  // Destructure the actual image data that we need, `responsiveImage`
  const {data: {upload: {responsiveImage}}} = exampleDatoGraphQlResponse;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>DatoCMS Next.js and react-datocms image tests</h1>
        <h2>Example 1: With our Image component</h2>
        <p>This example shows how our image component is typically used.</p>
        <DatoImage data={responsiveImage}/>

        <h2>Example 2: With the Next.js Image component (not ours)</h2>
        <p>This example shows how you'd use our GraphQL response with Next's own image component.</p>
        <NextImage src={responsiveImage.src} width={responsiveImage.width} height={responsiveImage.height} alt={''}/>
      </main>
    </div>
  );
}
