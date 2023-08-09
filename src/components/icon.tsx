import { ArrowLeft, ArrowRight, ArrowUpAZ, ArrowUpNarrowWide, Check, ChevronDown, ChevronUp, Facebook, Filter, GraduationCap, Instagram, Linkedin, LogOut, LucideProps, Mail, MapPin, Phone, Search, Settings, ShoppingCart, Store, Trophy, User2, X } from "lucide-react";
import React from "react";

export const Icons = {
  search: Search,
  shopping_cart: ShoppingCart,
  user: User2,
  arrow_left: ArrowLeft,
  arrow_right: ArrowRight,
  phone: Phone,
  mail: Mail,
  map: MapPin,
  facebook: Facebook,
  linkin: Linkedin,
  instagram: Instagram,
  filter: Filter,
  sortAZ: ArrowUpNarrowWide,
  check: Check,
  chevron_down: ChevronDown,
  chevron_up: ChevronUp,
  x: X,
  store: Store,
  graduation_cap: GraduationCap,
  trophy: Trophy,
  settings: Settings,
  log_out: LogOut

};
type prop = {
  name: Icon;
} & LucideProps;
export type Icon = keyof typeof Icons;

export function DynamicIcon({ name, ...prop }: prop) {
    const Icon = Icons[name];
    return <Icon {...prop} />;
}