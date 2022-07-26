export default {
  name: "tiktok-highlights",
  type: "document",
  title: "tiktok-highlights",
  fields: [
    {
      name: "title",
      type: "string",
      title: "title",
    },
    {
      name: "category",
      type: "string",
      title: "category",
    },
    {
      name: "tiktokId",
      type: "file",
      title: "Tik Tok Video",
    },
    {
      name: "url",
      type: "text",
      title: "VimeoURL",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
