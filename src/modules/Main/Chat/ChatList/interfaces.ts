export interface State {
  search: string
}

export interface HeaderProps {
  search: string,
  onChangeSearch: (value: string) => void
}
