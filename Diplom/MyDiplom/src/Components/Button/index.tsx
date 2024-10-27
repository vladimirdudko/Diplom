import styles from "./style.module.scss";

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean; // Добавлено для поддержки отключенной кнопки
}

function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`} // Объединяем классы
      disabled={disabled} // Устанавливаем disabled состояние
    >
      {children}
    </button>
  );
}

export default Button;
