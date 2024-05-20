import "@assets/styles/toaster.scss";
import { useToaster } from "@context/ToasterContext";
import CheckIcon from "@assets/icons/check.svg";
import ErrorIcon from "@assets/icons/error.svg";
import LoadingIcon from "@assets/icons/loading.svg";

const Snackbar = ({ title,desc, type, id,onRemove }) => {
  return (
    <div
      className="inline-flex p-6 w-96 flex-row items-center  gap-4 rounded-md border border-neutral-700 bg-neutral-900 p-6"
      id={`snackbar-${id}`}
    >
      {type === "success" && <img className="w-6 h-6" src={CheckIcon} alt="success" />}
      {type === "error" && <img className="w-6 h-6" src={ErrorIcon} alt="error" />}
      {type === "processing" && <img className="w-6 h-6" id="snackbar-loading" src={LoadingIcon} alt="loading" />}
      <div className="flex-flex-col w-72">
      <p className="text-neutral-200 text-sm font-normal font-['Inter'] leading-tight">{title}</p>
      <div className=" text-neutral-600 text-xs font-normal font-['Sora'] leading-tight">{desc}</div>
      </div>
      <img className="w-6 h-6 ml-auto cursor-pointer" src={ErrorIcon} alt="error" id="snackbar-close" onClick={onRemove} />
    </div>
  );
};

const Toaster = () => {
  const { toasts, removeToast } = useToaster();

  return (
    <div className="toaster">
      {toasts.map((toast, index) => (
        <Snackbar
          key={toast.id}
          id={toast.id}
          title={toast.title}
          desc={toast.desc}
          type={toast.type}
          onRemove={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default Toaster;
