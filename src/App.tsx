import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import { Cursor, Header } from "./components/common";
import { Intro } from "./slides/Intro";
import { Table } from "./slides/Table";
import { WhatIUse } from "./slides/WhatIUse";
import { WhatIsUseEffect } from "./slides/WhatIsUseEffect";
import { WhatIsUseEffect2 } from "./slides/WhatIsUseEffect2";
import { WhatIsUseEffect3 } from "./slides/WhatIsUseEffect3";
import { WhenUseUseEffect } from "./slides/WhenUseUseEffect";
import { Case1SideEffect } from "./slides/Case1SideEffect";
import { Case2WithParent } from "./slides/Case2WithParent";
import { Case3ExternalStore } from "./slides/Case3ExternalStore";
import { Case4DataFetching1 } from "./slides/Case4DataFetching1";
import { Case4DataFetching2 } from "./slides/Case4DataFetching2";
import { Case4DataFetching3 } from "./slides/Case4DataFetching3";
import { Case5HandleUserEvent1 } from "./slides/Case5HandleUserEvent1";
import { Case5HandleUserEvent2 } from "./slides/Case5HandleUserEvent2";
import { TheEnd } from "./slides/TheEnd";

import { StyledToastContainer } from "./components/common/toastify";

const SYMBOL_TEXT = "useEffect 야 가라~ 재미 없다~";

function App() {
  // const { hash } = useLocation();

  // const [title, setTitle] = useState<string>(SYMBOL_TEXT);

  // useEffect(() => {
  //   if (hash) {
  //     const next = `${decodeURI(hash).slice(1)} | ${SYMBOL_TEXT}`;
  //     setTitle(next);
  //   }
  // }, [hash]);

  // document.title = title;

  const { hash } = useLocation();

  const title = useMemo((): string => {
    if (hash) {
      return `${decodeURI(hash).slice(1)} | ${SYMBOL_TEXT}`;
    } else return SYMBOL_TEXT;
  }, [hash]);

  document.title = title;

  return (
    <>
      <main className="w-full h-full relative cursor-none">
        <Intro />
        <div className="relative z-10 w-full overflow-x-clip">
          <Header />
          <Table />
          <WhatIUse />
          <WhatIsUseEffect />
          <WhatIsUseEffect2 />
          <WhatIsUseEffect3 />
          <WhenUseUseEffect />
          <Case1SideEffect />
          <Case2WithParent />
          <Case3ExternalStore />
          <Case4DataFetching1 />
          <Case4DataFetching2 />
          <Case4DataFetching3 />
          <Case5HandleUserEvent1 />
          <Case5HandleUserEvent2 />
          <TheEnd />
        </div>
        <Cursor />
      </main>
      <StyledToastContainer />
    </>
  );
}

export default App;
