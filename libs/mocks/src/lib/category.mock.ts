import * as faker from 'faker';
import { ICategory, CategoryEnum } from '@monorepo-test/api-interfaces';

export class CategoryMock {
  private _data: ICategory = {
    displayName: CategoryEnum.JAVASCRIPT,
    description: null,
    areaId: null,
  };

  public withId() {
    this._data.id = faker.random.uuid();
    return this;
  }

  public withCategoryId(id: ICategory['id']): CategoryMock {
    this._data.id = id;
    return this;
  }

  public withArea(area: ICategory['displayName']): CategoryMock {
    this._data.displayName = area;
    return this;
  }

  public withDescription(description: ICategory['description']): CategoryMock {
    this._data.description = description;
    return this;
  }

  public model(): ICategory {
    return this._data;
  }
}
