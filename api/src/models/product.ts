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
import { Category } from "./category";
import { Unit } from "./unit";

@Table
export class Product extends Model<Product> {
  @Column(DataType.STRING(45))
  name!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @ForeignKey(() => Category)
  categoryId!: number;

  @BelongsTo(() => Category)
  category?: Category;

  @ForeignKey(() => Unit)
  unitId!: number;

  @BelongsTo(() => Unit)
  unit?: Unit;
}
