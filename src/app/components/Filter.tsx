"use client";
import ModalContainer from "@/components/model/ModelContainer";
import useModel from "../../../hooks/useModel";
import styles from "../page.module.css";
import Image from "next/image";
import Modal from "@/components/model/Model";
import FilterOption from "./FilterOption";
import { Suspense, useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export interface FilterType {
  name: string;
  title: string;
  isActive: boolean;
}

const filter: FilterType[] = [
  {
    name: "Distance",
    title: "Distance : Near to Far",
    isActive: false,
  },
  {
    name: "Price",
    title: "Price : Low to High",
    isActive: false,
  },
  {
    name: "Schedule",
    title: "Schedule : Sort to Long",
    isActive: false,
  },
  {
    name: "Rating",
    title: "Ratings : High to Low",
    isActive: false,
  },
];

const Filter = () => {
  const { modalOpen, open, close } = useModel();
  const [filterOption, setFilterOption] = useState<FilterType[]>(filter);
  const searchQuery = useSearchParams();
  const pathname = usePathname();
  const route = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchQuery.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchQuery]
  );

  const removeQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchQuery.toString());
      params.delete(name);

      return params.toString();
    },
    [searchQuery]
  );

  const handelFilter = (key: string) => {
    setFilterOption((pre) =>
      pre.map((obj) => {
        if (obj.name == key) {
          return {
            ...obj,
            isActive: !obj.isActive,
          };
        }
        return obj;
      })
    );
    if (searchQuery.has(key.toLowerCase())) {
      route.push(pathname + "?" + removeQueryString(key.toLowerCase()));
    } else {
      route.push(pathname + "?" + createQueryString(key.toLowerCase(), "true"));
    }
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className={styles.filterWrapper}>
        <div className={`${styles.filterBy}`} onClick={open}>
          <p>Sort By</p>
          <div>
            <Image src={"/icons/arrow-down.svg"} alt="^" width={16} height={16} />
          </div>
        </div>

        {filterOption.map((obj) => (
          <div
            key={obj.name}
            className={obj.isActive ? styles.filterActive : ""}
            onClick={() => handelFilter(obj.name)}
          >
            <p>{obj.name}</p>
          </div>
        ))}
      </div>
      <ModalContainer>
        {modalOpen && (
          <Modal handleClose={close}>
            <FilterOption filterOption={filterOption} setFilterOption={setFilterOption} handleClose={close} />
          </Modal>
        )}
      </ModalContainer>
    </Suspense>
  );
};

export default Filter;
