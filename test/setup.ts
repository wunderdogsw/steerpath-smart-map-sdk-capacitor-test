import "@testing-library/jest-dom";
import { vi } from "vitest";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).IS_REACT_ACT_ENVIRONMENT = true;

vi.mock("react-intl", () => ({
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires, @typescript-eslint/no-explicit-any
  ...(require("react-intl") as any),
  useIntl: () => ({
    formatMessage: ({ id }: { id: string }) => id
  })
}));
