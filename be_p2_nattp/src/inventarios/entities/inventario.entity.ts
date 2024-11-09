import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inventarios')
export class Inventario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 250 })
  ladrillo: string;
}
