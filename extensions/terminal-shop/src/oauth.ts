import { OAuth } from "@raycast/api";
import { OAuthService } from "@raycast/utils";

const client = new OAuth.PKCEClient({
  redirectMethod: OAuth.RedirectMethod.Web,
  providerName: "Terminal",
  providerIcon: "command-icon.png",
  description: "Sign in with Terminal.shop",
});

export const terminal = new OAuthService({
  client,
  clientId: "cli_01JEYAC1R0Q23WRGV9W81EBWW7",
  authorizeUrl: "https://auth.terminal.shop/authorize",
  tokenUrl: "https://auth.terminal.shop/token",
  refreshTokenUrl: "https://auth.terminal.shop/token",
  scope: "",
});
