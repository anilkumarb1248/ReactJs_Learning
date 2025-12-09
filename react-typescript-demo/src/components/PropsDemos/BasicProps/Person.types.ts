// export type PersonProps = {
//   name: {
//     first: string;
//     last: string;
//   };
// };

// export type PersonListProps = {
//   names: {
//     first: string;
//     last: string;
//   }[];
// };

export type Name = {
    first: string;
    last: string;
}

export type PersonProps = {
  name: Name
};

export type PersonListProps = {
  names: Name[];
};


