import {
  Model,
  Table,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from "sequelize-typescript";
import { Product } from "./product";

@Table
export class Category extends Model<Category> {
  @Column(DataType.STRING(45))
  name!: string;

  @Column(DataType.STRING(45))
  icon!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @HasMany(() => Product)
  products?: Product[];
}
