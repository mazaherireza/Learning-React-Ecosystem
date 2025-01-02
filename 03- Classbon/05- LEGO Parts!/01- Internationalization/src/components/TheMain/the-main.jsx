import { useTranslation } from "react-i18next";

const TheMain = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h2>{t("main.salutation")}</h2>
    </div>
  );
};

export default TheMain;