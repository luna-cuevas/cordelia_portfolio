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
      name: "url",
      type: "text",
      title: "VimeoURL",
    },
    {
      name: "myTags",
      title: "Tags",
      type: "tags",
      options: {
        includeFromRelated: "myTags",
        customLabel: "cutomLabel",
        includeFromRelated: "category",
      },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
