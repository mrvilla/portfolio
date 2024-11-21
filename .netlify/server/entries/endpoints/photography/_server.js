const photos = [
  {
    src: "./images/2024/foto-18-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2024
  },
  {
    src: "./images/2024/foto-17-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2024
  },
  {
    src: "./images/2024/foto-16-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2024
  },
  {
    src: "./images/2024/foto-15-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2024
  },
  {
    src: "./images/2024/foto-14-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2024
  },
  {
    src: "./images/2024/foto-13-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2024
  },
  {
    src: "./images/2024/foto-12-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2024
  },
  {
    src: "./images/2024/foto-11-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Potsdam",
    year: 2024
  },
  {
    src: "./images/2024/foto-10-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Potsdam",
    year: 2024
  },
  {
    src: "./images/2024/foto-09-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Potsdam",
    year: 2024
  },
  {
    src: "./images/2024/foto-08-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2024
  },
  {
    src: "./images/2024/foto-07-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2024
  },
  {
    src: "./images/2024/foto-06-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2024
  },
  {
    src: "./images/2024/foto-05-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Hjälmaren",
    year: 2024
  },
  {
    src: "./images/2024/foto-04-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2024
  },
  {
    src: "./images/2024/foto-03-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2024
  },
  {
    src: "./images/2024/foto-02-2024-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2024
  },
  {
    src: "./images/2024/foto-01-2024-min.jpg",
    alt: "Sweden",
    location: "Location: Sweden",
    year: 2024
  },
  {
    src: "./images/2023/foto-06-2023-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2023
  },
  {
    src: "./images/2023/foto-05-2023-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2023
  },
  {
    src: "./images/2023/foto-04-2023-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2023
  },
  {
    src: "./images/2023/foto-03-2023-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2023
  },
  {
    src: "./images/2023/foto-02-2023-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2023
  },
  {
    src: "./images/2023/foto-01-2023-min.jpg",
    alt: "Berlin",
    location: "Location: Berlin",
    year: 2023
  }
];
async function GET() {
  const contents = JSON.stringify(
    photos.map((photo) => ({
      src: photo.src,
      alt: photo.title,
      location: photo.location,
      year: photo.year
    }))
  );
  return new Response(contents, {
    headers: { "Content-Type": "application/json" }
  });
}
export {
  GET
};