import { ApiProperty } from '@nestjs/swagger';

export class HelloDto {
  @ApiProperty()
  readonly name: string;
}
