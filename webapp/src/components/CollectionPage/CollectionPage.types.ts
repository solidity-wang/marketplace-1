import { Collection, Item } from '@dcl/schemas'

export type Props = {
  collection: Collection
  items: Item[]
  isLoading: boolean
  onInit: () => void
  onBack: () => void
}
