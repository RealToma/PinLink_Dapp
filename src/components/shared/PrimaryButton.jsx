export const PrimaryButton = ({title,onClick}) => {
    return (
        <div
                className="corner-border-button"
                onClick={onClick}
              >
                {title}
              </div>
    )

}