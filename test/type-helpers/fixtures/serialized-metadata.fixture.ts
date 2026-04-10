export const SERIALIZED_METADATA = {
  '@lamuertepeluda/nestjs-swagger': {
    models: [
      [
        import('./create-user-dto.fixture'),
        {
          CreateUserDto: {
            active: {
              type: () => Boolean
            },
            role: {
              type: () => String
            }
          }
        }
      ]
    ]
  }
};
