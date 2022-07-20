export default {
  name: "tiktokVideos",
  type: "document",
  title: "Tik Tok Videos",
  fields: [
    {
      name: "title",
      type: "string",
      title: "title",
    },
    {
      name: "tiktokId",
      type: "file",
      title: "Tik Tok Video",
    },
    {
      name: "url",
      type: "url",
      title: "url",
    },
  ],
};
