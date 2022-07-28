export default {
  name: "visuals",
  type: "document",
  title: "Visuals",
  fields: [
    {
      name: "title",
      type: "string",
      title: "title",
    },
    {
      name: "image",
      type: "image",
      title: "image",
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
