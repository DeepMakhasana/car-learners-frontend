"use client";
import { ChangeEvent, Dispatch, SetStateAction, Suspense, useState } from "react";
import styles from "../page.module.css";
import { FilterType } from "./Filter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FilterOptionProps {
  handleClose: () => void;
  filterOption: FilterType[];
  setFilterOption: Dispatch<SetStateAction<FilterType[]>>;
}

const FilterOption = ({ filterOption, setFilterOption, handleClose }: FilterOptionProps) => {
  const [selectedFilter, setSelectedFilter] = useState(filterOption);
  const searchQuery = useSearchParams();
  const pathname = usePathname();
  const route = useRouter();

  const handelFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target.name;
    console.log(target);
    setSelectedFilter((pre) =>
      pre.map((obj) => {
        if (obj.name == target) {
          return {
            ...obj,
            isActive: !obj.isActive,
          };
        }
        return obj;
      })
    );
  };

  const handelApply = () => {
    setFilterOption(selectedFilter);
    // handel url query parameters
    const params = new URLSearchParams(searchQuery.toString());
    selectedFilter.forEach((filter) => {
      if (filter.isActive) {
        if (!searchQuery.has(filter.name.toLowerCase())) {
          params.set(filter.name.toLowerCase(), "true");
        }
      } else {
        if (searchQuery.has(filter.name.toLowerCase())) {
          params.delete(filter.name.toLowerCase());
        }
      }
    });
    handleClose();
    route.push(pathname + "?" + params.toString());
  };
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className={styles.filterOptionWrapper}>
        {selectedFilter.map((filter) =>
          filter.isActive ? (
            <div className={styles.filterOption} key={filter.name}>
              <p>{filter.title}</p>
              <input type="checkbox" name={filter.name} checked onChange={handelFilterChange} />
            </div>
          ) : (
            <div className={styles.filterOption} key={filter.name}>
              <p>{filter.title}</p>
              <input type="checkbox" name={filter.name} onChange={handelFilterChange} />
            </div>
          )
        )}

        <button className="btn" onClick={handelApply}>
          Apply Now
        </button>
      </div>
    </Suspense>
  );
};

export default FilterOption;
