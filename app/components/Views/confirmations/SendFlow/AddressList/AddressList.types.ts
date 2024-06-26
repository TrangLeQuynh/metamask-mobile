export interface AddressListProps {
  inputSearch?: string;
  onAccountPress: (address: string) => void;
  onAccountLongPress: (address: string) => void;
  onIconPress: () => void;
  onlyRenderAddressBook?: boolean;
  reloadAddressList?: boolean;
}

export interface Contact {
  address: string;
  name: string;
  chainId: string;
  isSmartContract?: boolean;
  isAmbiguousAddress?: boolean;
}
