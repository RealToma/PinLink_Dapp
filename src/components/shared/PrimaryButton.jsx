export const PrimaryButton = ({title,onClick}) => {
    return (
        <a
                className="corner-border-button"
                onClick={onClick}
              >
                {title}
              </a>
    )

}