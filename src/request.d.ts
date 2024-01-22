declare namespace Express {
  export interface Request {
    order:
      | (Document<unknown, {}, Order> &
          Order & {
            _id: Types.ObjectId
          })
      | null
  }
}
