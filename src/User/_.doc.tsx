export default {
    id: "userProps",
    name: "UserProps",
    description:
        "Interfaz que define las propiedades para un usuario, incluyendo su estado, rol y detalles de verificación.",
    props: [
        {
            id: "status",
            type: "UserStatusProps",
            required: true,
            default: "N/A",
            description: "Estado de verificación del usuario.",
        },
        {
            id: "id",
            type: "string",
            required: true,
            default: "N/A",
            description: "Identificador único del usuario.",
        },
        {
            id: "token",
            type: "string",
            required: true,
            default: "N/A",
            description: "Token asociado al usuario para autenticación.",
        },
        {
            id: "name",
            type: "string",
            required: true,
            default: "N/A",
            description: "Nombre completo del usuario.",
        },
        {
            id: "img",
            type: "ImgDataProps",
            required: true,
            default: "N/A",
            description: "Imagen de perfil del usuario.",
        },
        {
            id: "role",
            type: "UserRoleProps",
            required: true,
            default: "N/A",
            description: "Rol del usuario dentro del sistema.",
        },
        {
            id: "phone",
            type: "PhoneProps (opcional)",
            required: false,
            default: "undefined",
            description: "Número de teléfono del usuario.",
        },
        {
            id: "email",
            type: "string",
            required: true,
            default: "N/A",
            description: "Correo electrónico del usuario.",
        },
        {
            id: "stripe_id",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description: "Identificador del usuario en Stripe.",
        },
        {
            id: "dateCreate",
            type: "Date",
            required: true,
            default: "N/A",
            description: "Fecha en la que se creó el usuario.",
        },
        {
            id: "verify",
            type: "{ [id in UserTypeVerifyProps]: UserStatusProps } (opcional)",
            required: false,
            default: "undefined",
            description:
                "Información de verificación para distintos tipos, como email, teléfono y empresa.",
        },
    ],
    extras: [
        {
            id: "userTypeVerifyProps",
            title: "UserTypeVerifyProps",
            description:
                "Enumeración que define los tipos de verificación para un usuario.",
            tableItems: [
                {
                    key: "email",
                    value: "0",
                    description: "Verificación por correo electrónico.",
                },
                {
                    key: "phone",
                    value: "1",
                    description: "Verificación por número de teléfono.",
                },
                {
                    key: "company",
                    value: "2",
                    description: "Verificación de empresa.",
                },
            ],
        },
        {
            id: "userStatusProps",
            title: "UserStatusProps",
            description: "Enumeración que define los estados de un usuario.",
            tableItems: [
                {
                    key: "VERIFY",
                    value: "'VERIFY'",
                    description: "Usuario verificado.",
                },
                {
                    key: "NOVERIFY",
                    value: "'NOVERIFY'",
                    description: "Usuario no verificado.",
                },
                {
                    key: "BAN",
                    value: "'BAN'",
                    description: "Usuario prohibido (ban).",
                },
                {
                    key: "PENDING",
                    value: "'PENDING'",
                    description: "Verificación pendiente del usuario.",
                },
            ],
        },
        {
            id: "userRoleProps",
            title: "UserRoleProps",
            description: "Enumeración que define los roles de un usuario.",
            tableItems: [
                {
                    key: "ADMIN",
                    value: "'ADMIN'",
                    description: "Usuario con rol de administrador.",
                },
                {
                    key: "CUSTOMER",
                    value: "'CUSTOMER'",
                    description: "Usuario con rol de cliente.",
                },
                {
                    key: "BACKOFFICE",
                    value: "'BACKOFFICE'",
                    description: "Usuario con rol de backoffice.",
                },
            ],
        },
    ],
};
