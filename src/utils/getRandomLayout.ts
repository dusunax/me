export interface Layout {
  id: number;
  length: number;
  cols: number;
  items: number[][];
}

export const getRandomLayout = (numImages: number): Layout => {
  const layouts = [
    { id: 1, length: 1, cols: 1, items: [[1]] },
    { id: 2, length: 2, cols: 1, items: [[1, 1]] },
    { id: 3, length: 2, cols: 2, items: [[1], [1]] },
    { id: 4, length: 3, cols: 1, items: [[1, 1, 1]] },
    { id: 5, length: 3, cols: 2, items: [[1, 1], [2]] },
    { id: 6, length: 3, cols: 2, items: [[2], [1, 1]] },
    { id: 7, length: 3, cols: 3, items: [[1], [1], [1]] },
    { id: 8, length: 4, cols: 1, items: [[1], [1], [1], [1]] },
    {
      id: 9,
      length: 4,
      cols: 2,
      items: [
        [1, 1],
        [1, 1],
      ],
    },
    {
      id: 10,
      length: 4,
      cols: 3,
      items: [[1, 1, 1], [3]],
    },
    {
      id: 11,
      length: 4,
      cols: 3,
      items: [[1, 2], [3], [3]],
    },
    {
      id: 12,
      length: 4,
      cols: 3,
      items: [[3], [1, 2], [3]],
    },
    {
      id: 12,
      length: 4,
      cols: 3,
      items: [[3], [3], [1, 2]],
    },
  ];

  const getRandomLayout = (numImages: number) => {
    const lengthMatched = layouts.filter(
      (layout) => layout.length === numImages
    );
    const randomLayout =
      lengthMatched[Math.floor(Math.random() * lengthMatched.length)];
    return randomLayout;
  };

  return getRandomLayout(numImages);
};
