/** Global definitions for development **/

// for style loader
declare module '*.styl' {

  type OriginalClassName = string
  type UsageClassName = string

  const styles: Record<OriginalClassName, UsageClassName>;
  export = styles;
}

// Omit type https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
