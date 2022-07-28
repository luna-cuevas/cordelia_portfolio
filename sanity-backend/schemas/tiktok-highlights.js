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
      name: "video",
      type: "file",
      title: "videoUpload",
    },
    {
      name: "myTags",
      title: "Tags",
      type: "tags",
      options: {
        includeFromRelated: "myTags",
        customLabel: "cutomLabel",
        includeFromReference: "category",
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
