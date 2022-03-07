import {
  Model,
  Table,
  Column,
  DataType,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from "sequelize-typescript";
import { List } from "./list";

@Table
export class User extends Model<User> {
  @AllowNull(false)
  @Column(DataType.STRING(128))
  googleId?: string;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  email?: string;

  @Column(DataType.STRING(45))
  firstname?: string;

  @Column(DataType.STRING(45))
  lastname?: string;

  @Column(DataType.STRING(128))
  name?: string;

  @Column(DataType.STRING(256))
  avatar?: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @HasMany(() => List, {
    onDelete: "CASCADE",
  })
  lists?: List[];
}
