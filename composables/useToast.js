import { toast } from "vue-sonner"

export function useToast() {
  const success = (message, options = {}) => {
    toast.success(message, {
      class: "toast-success",
      ...options
    })
  }

  const error = (message, options = {}) => {
    toast.error(message, {
      class: "toast-error",
      ...options
    })
    
  }

  const info = (message, options = {}) => {
    toast(message, {
      class: "toast-default",
      ...options
    })
  }

  const closeAll = () => toast.dismiss()

  return {
    success,
    error,
    info,
    closeAll
  }
}
