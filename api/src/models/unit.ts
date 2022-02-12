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
export class Unit extends Model<Unit> {
  @Column(DataType.STRING(45))
  name!: string;

  @Column(DataType.STRING(8))
  value!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @HasMany(() => Product)
  products?: Product[];
}
