export default {
  name: "pinterestBoards",
  type: "document",
  title: "Pinterest Boards",
  fields: [
    {
      name: "title",
      type: "string",
      title: "title",
    },
    {
      name: "url",
      type: "url",
      title: "url",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
