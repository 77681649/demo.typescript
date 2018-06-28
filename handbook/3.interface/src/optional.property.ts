interface WebpackOption {
  entry: string | string[];
  output?: OutputOption;
}

interface OutputOption {
  filename?: string;
  path?: string;
}

export default function webpack(options: WebpackOption) {}

webpack({
  entry: "index.js"
});

webpack({
  entry: "index.js",
  output: {
    filename: "main.js"
  }
});
