import {
  Model,
  Table,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./user";

@Table
export class List extends Model<List> {
  @Column(DataType.STRING(45))
  name!: string;

  @Column(DataType.STRING(45))
  status?: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @ForeignKey(() => User)
  userId!: number;

  @BelongsTo(() => User)
  user?: User;
}
