export type CreateUserOutcome =
  | { outcome: "INVALID_EMAIL" }
  | { outcome: "INVALID_PASSWORD" }
  | { outcome: "INVALID_PHONE" }
  | { outcome: "INVALID_USERNAME" }
  | { outcome: "SUCCEEDED" };
