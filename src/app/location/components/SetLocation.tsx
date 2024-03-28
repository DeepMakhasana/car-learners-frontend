"use client";
import ModalContainer from "@/components/model/ModelContainer";
import styles from "../location.module.css";
import { useRouter } from "next/navigation";
import Modal from "@/components/model/Model";
import SetManuallyLocation from "./SetManuallyLocation";
import useModel from "../../../../hooks/useModel";

const SetLocation = () => {
  const { modalOpen, open, close } = useModel();
  const route = useRouter();

  function isMobile() {
    const minWidth = 768;
    return window.innerWidth < minWidth || screen.width < minWidth;
  }

  const setLocation = () => {
    if (isMobile()) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          // set user location in local storage
          localStorage.setItem("userLocation", JSON.stringify(userLocation));
          // redirect on home page after store user location
          route.push("/");
        });
      } else {
        setLocationManually();
      }
    } else {
      setLocationManually();
    }
  };

  const setLocationManually = () => {
    open();
  };

  return (
    <>
      <div className={styles.location__action}>
        <div onClick={setLocation}>Use Current Location</div>
        <span onClick={setLocationManually}>Set Location Manually</span>
      </div>
      {/* Model for set location manually */}
      <ModalContainer>
        {modalOpen && (
          <Modal handleClose={close}>
            <SetManuallyLocation handleClose={close} />
          </Modal>
        )}
      </ModalContainer>
    </>
  );
};

export default SetLocation;
